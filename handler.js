export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello Gama! ${(await message({ time: 1, copy: 'Nossa função executou com sucesso!'}))}`,
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (com delay)`);
  }, time * 1000)
);
