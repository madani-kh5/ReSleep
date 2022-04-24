import { Fragment } from "react";

function Select(props) {
  return (
    <Fragment>
      {/* sm:mx-2 mx-0 my-2 sm:px-8 px-12 py-3 */}
      <div class="inline-block relative sm:w-32 w-full">
        <select name={props.name} defaultValue={""} onChange={props.getData} className="appearance-none my-2 p-3 bg-[#C8C7AB] border-[#C8C7AB] hover:bg-[#adac95] font-semibold text-white text-sm rounded-lg block w-full">
          <option value="" disabled="disabled">
            {props.name}
          </option>
          {props.data.map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </Fragment>
  );
}

export default Select;
