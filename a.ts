$1: builder.query({
  query() {
    return {
      url: `$2`,
      method: "GET",
    };
  },
  providesTags: [],
}),