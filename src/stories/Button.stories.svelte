<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import Button from "@/lib/Button.svelte"
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Components/Button"
  component={Button}
  argTypes={{
    backgroundColor: { control: "color" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Button {...args}>Slot</Button>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Primary"
  args={{
    backgroundColor: "red",
  }}
/>
