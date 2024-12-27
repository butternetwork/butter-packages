"use client";

const ErrorFallback = ({ error, id }: any) => {
  // useEffect(() => {
  //     if (!!error) {
  //         resetErrorBoundary();
  //     }
  // }, [error, resetErrorBoundary]);

  console.log(error.toString());

  return (
    <div role={"alert"}>
      <p> Something went wrong with @{id}:</p>
      <div
        style={{
          color: "red",
          whiteSpace: "wrap",
          wordBreak: "break-all",
          maxWidth: "100vw",
          padding: "10px",
        }}
      >
        {JSON.stringify(error.message)}
        <br /> {error.stack}
      </div>
    </div>
  );
};

export default ErrorFallback;
