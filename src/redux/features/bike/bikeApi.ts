import { TQueryParam, TResponseRedux } from "../../../Types";
import { baseApi } from "../../api/baseApi";

export const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "bikes",
          method: "GET",
          params: params,
        };
     

       
      },
      providesTags: ['bikes'],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});


export const {useGetAllBikesQuery}=bikeApi