export const noteParamHandler = ({ params }) => {
  if (isNaN(params.id))
    throw new Response("Bad", {
      statusText: "You must write digit not letter",
      status: 404,
    });
};
