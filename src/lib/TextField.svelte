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
</script>

<div class="text-field">
  <div class="input-section">
    <div class="outline" style:--color={inputColor}>
      <div class="outline-start" />
      <div class="outline-content" class:active={shouldMaintainLabelActive}>
        <label for={label} class:active>{label}</label>
      </div>
      <div class="outline-end" />
    </div>

    <slot name="icon-left" />
    <input
      type="text"
      id={label}
      placeholder={placeholderValue}
      on:focus={handleFocus}
      on:blur={handleBlur}
      bind:value
    />
    <slot name="icon-right" />
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

    display: flex;

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

    &-content {
      grid-area: content;

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

  .error {
    margin-top: 0.25rem;

    color: red;
    font-size: 80%;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 1rem;

    outline: transparent;
    border: none;
    background: none;
  }
</style>
