<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import TextField from "@/lib/TextField.svelte"
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Components/TextField"
  component={TextField}
  argTypes={{
    label: {
      description: "Input label name",
      type: { name: "string", required: true },
    },
    placeholder: {
      description: "Input placeholder, displays only if value length is zero",
      type: { name: "string" },
    },
    error: {
      description: "Error message",
      type: { name: "string" },
    },
    value: {
      description: "Value prop for binding",
      type: { name: "string" },
    },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <TextField {...args}>Slot</TextField>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Primary"
  args={{
    label: "Label",
    placeholder: "Placeholder",
  }}
/>

<Story name="Error">
  <TextField label="Label" error="Error message" />
</Story>
