export function imageParalex() {
  const image = document.querySelector(".background-image") as HTMLElement;
  const container = document.querySelector(
    ".background-image-container"
  ) as HTMLElement;
  image.addEventListener("load", () => {
    let initialOffset = map(
      100,
      0,
      100,
      0,
      image.getBoundingClientRect().width -
        container.getBoundingClientRect().width
    );
    image.style.transform = `translateX(-${initialOffset}px)`;
    container.onmousemove = (e: MouseEvent) => {
      const imageWidth = image.getBoundingClientRect().width;
      const containerWidth = container.getBoundingClientRect().width;
      const x = e.clientX;
      let percentage = (1 + (x - containerWidth) / containerWidth) * 100;
      let offset = map(percentage, 0, 100, 0, imageWidth - containerWidth);
      if (offset < 0) offset = 0;
      image.animate(
        { transform: `translateX(-${offset}px)` },
        {
          duration: 1000,
          iterations: 1,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
    };
  });
}

function map(
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}
