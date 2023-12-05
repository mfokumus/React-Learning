import React, { createContext, useContext, useReducer } from "react";

//yeni bir context oluştur
export const TodoLayerContext = createContext();

//bir provider oluştur. Oluşturduğumuz contexti bana sağlayan şey
// o  contexti kullanmak isteyen diğer componentleri bu layer içinde tutmamız lazım
export const TodoLayer = ({ initialState, reducer, children }) => (
  <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TodoLayerContext.Provider>
);

//çağılacak bir fonksiyon yazalım
// her sayfada useContext diyip todolayer context dememek için burda bir bir fonksiyon içine atıyoruz
export const useTodoLayerValue = () => useContext(TodoLayerContext);
