import { useState } from "react";
import FormField from "../../components/FormField/FormField";
import { useNavigate } from "react-router-dom";
import { useUserReducer } from "../../context/useReducer";

export default function CheckOut() {
  const [state, dispatch] = useUserReducer();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
      <div className="mt-10 mb-16 relative">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline hover:text-peru"
        >
          Go Back
        </button>
      </div>
      {showToast && (
        <div className="toast">
          <p>{toastMessage}</p>
        </div>
      )}
      <FormField state={state} dispatch={dispatch} />
    </div>
  );
}
