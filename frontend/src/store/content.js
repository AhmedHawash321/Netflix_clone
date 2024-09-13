import { create } from "zustand";

export const useContentStore = create((set) => ({
    contentType:'Movie',
    setContentType: (type) => set({contentType:type}),
}));