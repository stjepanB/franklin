import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  block.textContent = 'FIRST JS CODE -> Hello World';
}
