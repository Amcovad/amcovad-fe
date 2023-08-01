import { useFormContext } from "react-hook-form";
import classNames from "classnames";

type ErrorMessages = {
  className: string;
  name: string;
};

export function ErrorMessage({
  className = "",
  name = "",
}: ErrorMessages | any) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {errors?.[name] && (
        <div className={classNames("text-danger-500 py-1 text-sm ", className)}>
          {errors?.[name]?.message as any}
        </div>
      )}
    </>
  );
}

// ErrorMessage.defaultProps = {
//   className: null,
//   name: null,
// };
