/* tslint:disable */
/* eslint-disable */

export class HokutoRenderer {
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Create a new Hokuto renderer attached to a canvas element
   *
   * # Arguments
   * * `canvas_id` - The ID of the canvas element to render to
   *
   * # Returns
   * A new HokutoRenderer instance or an error
   */
  constructor(canvas_id: string);
  /**
   * Render HTML content with optional CSS
   *
   * # Arguments
   * * `html` - HTML string to render
   * * `css` - Optional CSS string (can be None/undefined in JS)
   *
   * # Returns
   * Ok(()) on success, or an error
   */
  render(html: string, css?: string | null): void;
  /**
   * Resize the viewport
   *
   * Call this when the canvas size changes. Pass the logical (CSS) size.
   */
  resize(width: number, height: number): void;
  /**
   * Handle mouse move event
   *
   * # Arguments
   * * `x` - Mouse X position relative to canvas
   * * `y` - Mouse Y position relative to canvas
   *
   * # Returns
   * JSON string with hover information (element IDs, cursor type, etc.)
   */
  on_mouse_move(x: number, y: number): any;
  /**
   * Handle click event
   *
   * # Arguments
   * * `x` - Click X position relative to canvas
   * * `y` - Click Y position relative to canvas
   *
   * # Returns
   * JSON string with click target information
   */
  on_click(x: number, y: number): any;
  /**
   * Get the current viewport width
   */
  readonly width: number;
  /**
   * Get the current viewport height
   */
  readonly height: number;
}

/**
 * Initialize panic hook for better error messages in browser console
 */
export function init(): void;

/**
 * Log a message to the browser console (for debugging)
 */
export function log(message: string): void;

/**
 * Get the library version
 */
export function version(): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly init: () => void;
  readonly __wbg_hokutorenderer_free: (a: number, b: number) => void;
  readonly hokutorenderer_new: (a: number, b: number) => [number, number, number];
  readonly hokutorenderer_render: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly hokutorenderer_resize: (a: number, b: number, c: number) => void;
  readonly hokutorenderer_on_mouse_move: (a: number, b: number, c: number) => any;
  readonly hokutorenderer_on_click: (a: number, b: number, c: number) => any;
  readonly hokutorenderer_width: (a: number) => number;
  readonly hokutorenderer_height: (a: number) => number;
  readonly log: (a: number, b: number) => void;
  readonly version: () => [number, number];
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
