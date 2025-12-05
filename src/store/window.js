import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

//Immer designed to simplify working with immutable state. It allows to write code that appears to directly mutate data, while behind the scenes, Immer handles the creation of new, immutable state objects in an efficient manner.

const useWindowStore = create(immer((set) => ({
  windows: WINDOW_CONFIG,
  nextZIndex: INITIAL_Z_INDEX + 1,

  //additional functions used to manage our windows
  openWindow: ( windowKey, data = null )=> set((state) => {
    const win = state.windows[windowKey];
    if(!win) return;
    win.isOpen = true;
    win.zIndex = state.nextZIndex;
    win.data = data ?? win.data;
    state.nextZIndex++
  } ),

  closedWindow: ( windowKey ) => set((state) => {
    const win = state.windows[windowKey];
    if(!win) return;
    win.isOpen = false;
    win.zIndex = INITIAL_Z_INDEX;
    win.data = null;
  } ),

  focusWindow: ( windowKey ) => set((state) => {
    const win = state.windows[windowKey];
    win.zIndex = state.nextZIndex++;
  } )
})))


export default useWindowStore;