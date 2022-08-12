import React from "react";

function Table(props) {
  return (
    <>
      <div className="w-full bg-[#363636] mt-9">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">{props.children}</table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
