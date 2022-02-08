<script lang="ts">
  export let label: string = ""
  export let placeholder: string = ""
  export let error: string = ""
  export let value: string = ""

  let active = false
  const handleFocus = () => (active = true)
  const handleBlur = () => (active = false)

  $: inputColor = error ? "red" : active ? "blue" : "black"
  $: placeholderValue = active ? placeholder : ""
  $: shouldMaintainLabelActive = active || value.length > 0

  let iconLeftRef: HTMLDivElement
</script>

<div class="text-field">
  <div class="input-section">
    <div class="outline" style:--color={inputColor}>
      <div class="outline-start" />

      <div class="icon-left">
        {#if $$slots["icon-left"]}
          <slot name="icon-left" />
        {/if}
      </div>

      <div class="outline-label" class:active={shouldMaintainLabelActive}>
        <label for={label} class:active>{label}</label>
      </div>

      <div class="outline-content" />

      <div class="icon-right">
        {#if $$slots["icon-right"]}
          <slot name="icon-right" />
        {/if}
      </div>

      <div class="outline-end" />
    </div>

    <input
      type="text"
      id={label}
      placeholder={placeholderValue}
      on:focus={handleFocus}
      on:blur={handleBlur}
      bind:value
      class:hasIconLeft={$$slots["icon-left"]}
    />
  </div>

  {#if error}
    <span class="error">{error}</span>
  {/if}
</div>

<style lang="scss">
  * {
    transition: 0.2s;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
  }

  .text-field {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  .input-section {
    position: relative;

    display: flex;
  }

  .outline {
    position: absolute;
    pointer-events: none;

    display: grid;
    grid:
      "start iconLeft label content iconRight end"
      /0.5rem 1rem auto 1fr 1rem 0.5rem;

    width: 100%;
    height: 100%;

    &-start {
      grid-area: start;

      width: 1rem;
      height: 100%;

      border: 2px solid var(--color);
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
      border-right: none;
    }

    &-label {
      grid-area: label;

      display: flex;
      align-items: center;

      height: 100%;

      border: 2px solid var(--color);
      border-left: none;
      border-right: none;

      white-space: nowrap;

      padding: 0 0.25rem;

      &.active {
        border-top: none;

        label {
          transform: translateY(-50%);

          display: flex;
          align-items: center;

          height: 100%;

          color: var(--color);
          font-size: 80%;
        }
      }
    }

    &-content {
      grid-area: content;

      border: 2px solid var(--color);
      border-left: none;
      border-right: none;
    }

    &-end {
      grid-area: end;

      width: 100%;
      height: 100%;

      border: 2px solid var(--color);
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      border-left: none;
    }
  }

  .icon {
    &-left,
    &-right {
      display: flex;
      align-items: center;

      width: 1rem;
      height: 100%;

      border: 2px solid var(--color);
      border-left: none;
      border-right: none;
    }

    &-left {
      grid-area: iconLeft;
    }
    &-right {
      grid-area: iconRight;
    }
  }

  .error {
    margin-top: 0.25rem;

    color: red;
    font-size: 80%;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 1rem 1.75rem;

    outline: transparent;
    border: none;
    background: none;

    &.hasIconLeft {
      margin-left: 2rem;
    }
  }
</style>
