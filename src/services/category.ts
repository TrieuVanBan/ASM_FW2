import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICate } from "../interfaces/category";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Catgory"],
  endpoints: (builder) => ({
    getCategorys: builder.query<ICate[], void>({
      query: () => "/categorys",
      providesTags: ["Catgory"],
    }),
    getCategory: builder.query<ICate, void>({
      query: (id) => ({
        url: `/categorys/${id}`,
      }),
      providesTags: ["Catgory"],
    }),
    addCategory: builder.mutation<ICate, Omit<ICate, "id">>({
      query: (category) => ({
        url: "/categorys",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["Catgory"],
    }),
    editCategory: builder.mutation<ICate, ICate>({
      query: (category) => ({
        url: `categorys/${category.id}`,
        method: "PUT",
        body: category,
      }),
      invalidatesTags: ["Catgory"],
    }),
    removeCategory: builder.mutation<ICate, number>({
      query: (id) => ({
        url: `categorys/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Catgory"],
    }),
  }),
});

export const {
  useGetCategorysQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
  useRemoveCategoryMutation,
} = categoryApi;
