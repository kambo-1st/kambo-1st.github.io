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
   * Handle mouse down event - starts drag selection
   *
   * # Arguments
   * * `x` - Mouse X position relative to canvas
   * * `y` - Mouse Y position relative to canvas
   * * `timestamp` - Event timestamp in milliseconds
   *
   * # Returns
   * JSON string with click target information
   */
  on_mouse_down(x: number, y: number, timestamp: number): any;
  /**
   * Handle mouse up event - ends drag selection
   */
  on_mouse_up(): void;
  /**
   * Handle click event
   *
   * # Arguments
   * * `x` - Click X position relative to canvas
   * * `y` - Click Y position relative to canvas
   *
   * # Returns
   * JSON string with click target information including focus state
   */
  on_click(x: number, y: number): any;
  /**
   * Handle keyboard key down event
   *
   * # Arguments
   * * `key` - The key that was pressed (e.g., "a", "Enter", "Backspace")
   * * `ctrl` - Whether Ctrl/Cmd is held
   * * `shift` - Whether Shift is held
   * * `alt` - Whether Alt is held
   *
   * # Returns
   * true if the event was handled (should prevent default)
   */
  on_key_down(key: string, ctrl: boolean, shift: boolean, _alt: boolean): boolean;
  /**
   * Handle text input (for character insertion)
   *
   * # Arguments
   * * `text` - The text to insert
   *
   * # Returns
   * true if the event was handled
   */
  on_text_input(text: string): boolean;
  /**
   * Clear focus (call when canvas loses focus)
   */
  on_blur(): void;
  /**
   * Check if an input element is currently focused
   */
  has_focus(): boolean;
  /**
   * Get the current value of an input element
   */
  get_input_value(node_id: number): string | undefined;
  /**
   * Set the value of an input element
   */
  set_input_value(node_id: number, value: string): void;
  /**
   * Get the checked state of a checkbox/radio
   */
  is_checked(node_id: number): boolean;
  /**
   * Set the checked state of a checkbox
   */
  set_checked(node_id: number, checked: boolean): void;
  /**
   * Get the currently selected text (for copy/cut operations)
   *
   * # Returns
   * The selected text, or empty string if no selection
   */
  get_selected_text(): string;
  /**
   * Handle paste from clipboard
   *
   * # Arguments
   * * `text` - The text to paste
   *
   * # Returns
   * true if the paste was handled
   */
  paste(text: string): boolean;
  /**
   * Handle cut operation (delete selected text, returns the cut text)
   *
   * # Returns
   * The cut text, or empty string if no selection
   */
  cut(): string;
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
  readonly __wbg_hokutorenderer_free: (a: number, b: number) => void;
  readonly hokutorenderer_new: (a: number, b: number, c: number) => void;
  readonly hokutorenderer_render: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly hokutorenderer_resize: (a: number, b: number, c: number) => void;
  readonly hokutorenderer_on_mouse_move: (a: number, b: number, c: number) => number;
  readonly hokutorenderer_on_mouse_down: (a: number, b: number, c: number, d: number) => number;
  readonly hokutorenderer_on_mouse_up: (a: number) => void;
  readonly hokutorenderer_on_click: (a: number, b: number, c: number) => number;
  readonly hokutorenderer_on_key_down: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly hokutorenderer_on_text_input: (a: number, b: number, c: number) => number;
  readonly hokutorenderer_on_blur: (a: number) => void;
  readonly hokutorenderer_has_focus: (a: number) => number;
  readonly hokutorenderer_get_input_value: (a: number, b: number, c: number) => void;
  readonly hokutorenderer_set_input_value: (a: number, b: number, c: number, d: number) => void;
  readonly hokutorenderer_is_checked: (a: number, b: number) => number;
  readonly hokutorenderer_set_checked: (a: number, b: number, c: number) => void;
  readonly hokutorenderer_width: (a: number) => number;
  readonly hokutorenderer_height: (a: number) => number;
  readonly hokutorenderer_get_selected_text: (a: number, b: number) => void;
  readonly hokutorenderer_paste: (a: number, b: number, c: number) => number;
  readonly hokutorenderer_cut: (a: number, b: number) => void;
  readonly log: (a: number, b: number) => void;
  readonly version: (a: number) => void;
  readonly init: () => void;
  readonly __wbindgen_export: (a: number, b: number) => number;
  readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export3: (a: number) => void;
  readonly __wbindgen_export4: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
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
