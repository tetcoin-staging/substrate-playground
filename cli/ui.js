const {useState, useEffect} = require('react');
const React = require('react');
const {render, Box, Text} = require('ink');
const SelectInput = require('ink-select-input');
const Markdown = require('ink-markdown');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const Link = require('ink-link');

async function dockerRun(templateId, tag, ui, debug) {
	const { spawn } = require('child_process');

	const image = `paritytech/substrate-playground-template-${templateId}${ui?"-theia":""}:${tag}`;
	if (ui) {
		return spawn('docker', ['run', '-p', '80:3000' , image], debug ? {stdio: 'inherit'} : {});
	} else {
		return spawn('docker', ['run', '-it', image, 'bash'], {stdio: 'inherit'});
	}
}

function Cartouche({web, templateId}) {
	return (
		<Box borderStyle="double" borderColor="green" flexDirection="column" margin={2}>
			<Box flexDirection="column" alignItems="center" justifyContent="center" margin={1}>
				{web
				?<>
					<Link url="http://localhost">Browse <Text bold color="green">{templateId}</Text> at <Text bold>localhost</Text></Link>
					<Text>Hit <Text color="red" bold>Ctrl+c</Text> to exit</Text>
				 </>
				:<>
					<Text>Starting <Text bold color="green">{templateId}</Text></Text>
					<Text>Hit <Text color="red" bold>Ctrl+d</Text> to exit</Text>
				 </>}

			</Box>
		</Box>
	);
}

const App = (object) => {
	const web = object.web;
	const debug = object.debug;
	const env = object.env;
	const templates = object.result.templates;
	const templateIds = Object.keys(templates);
	const items = templateIds.map((key) => {return {label: key, value: key}});
	const [description, setDescription] = useState(templates[templateIds[0]].description);
	const [templateId, setTemplateId] = useState(object.template);
	const template = templates[templateId];

	const handleSelect = (template) => {
		setTemplateId(template.value);
	};

	const handleHighlight = selection => {
		setDescription(templates[selection.value].description);
	};

	useEffect(() => {
		async function deploy(template) {
			const tag = template.image.split(":").slice(-1)[0];
			const p = await dockerRun(templateId, tag, web, debug);
			p.on('exit', () => console.log('\nTemplate shut down'));
		}

		if (templateId && template) {
			deploy(template);
		}
	}, [templateId]);
	
	return (
	<Box flexDirection="column">
		<Box flexDirection="column">
			<Gradient name="rainbow">
				<BigText text="Playground"/>
			</Gradient>
			<Text>Locally deploy a playground <Text bold>template</Text> from CLI (<Text bold color="green">{env}</Text> environment)</Text>
		</Box>
		
		{templateId == null &&
		<Box flexDirection="column" margin={2}>
			<Text>Select a template:</Text>
			<Box borderStyle="double" borderColor="green">
				<Box flexGrow={1}>
					<SelectInput.default items={items} onSelect={handleSelect} onHighlight={handleHighlight} />
				</Box>
				<Box flexGrow={3} justifyContent="flex-start">
					<Markdown.default>{description}</Markdown.default>
				</Box>
			</Box>
		</Box>}

		{template &&
		<Cartouche web={web} templateId={templateId} />}

		{(templateId && !template) &&
		<Box borderStyle="double" borderColor="red" flexDirection="column" margin={2}>
			<Text>Unknown template <Text bold color="green">{templateId}</Text></Text>
		</Box>}
	</Box>);
};

function rend(templates) {
	return render(React.createElement(App, templates));
}

module.exports = rend;