import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  if(block.textContent.startsWith("Frank")){
    return;
  }
  block.textContent = block.textContent + '   FIRST JS CODE -> Hello World';
}
