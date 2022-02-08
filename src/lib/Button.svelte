<script lang="ts">
  import { readableColor } from "polished"

  export let background = "red"

  let buttonRef: HTMLButtonElement
  $: color = readableColor(background)

  const createRipple = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
    const ripple = document.createElement("span")
    buttonRef.appendChild(ripple)

    const { clientWidth, clientHeight } = buttonRef

    const maxSize = clientWidth > clientHeight ? clientWidth * 5 : clientHeight * 5

    const { clientX, clientY } = event
    const { offsetLeft, offsetTop } = event.currentTarget

    const xPosition = clientX - offsetLeft
    const yPosition = clientY - offsetTop

    Object.assign(ripple.style, {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      left: `${xPosition}px`,
      top: `${yPosition}px`,
      background: color,
      borderRadius: "50%",
      touchAction: "none",
      pointerEvents: "none",
    })

    ripple.animate(
      [
        { width: "0px", height: "0px", opacity: 0.5 },
        { width: `${maxSize}px`, height: `${maxSize}px`, opacity: 0 },
      ],
      { duration: 500 }
    )

    setTimeout(() => buttonRef.removeChild(ripple), 500)
  }
</script>

<button bind:this={buttonRef} on:click on:click={createRipple} style:background style:color>
  <slot />
</button>

<style lang="scss">
  button {
    position: relative;
    padding: 0.5rem 1rem;

    overflow: hidden;

    cursor: pointer;
    border: none;
    border-radius: 5rem;
  }
</style>
