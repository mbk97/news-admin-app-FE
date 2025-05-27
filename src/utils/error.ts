import axios from "axios";

export function getCustomErrorMessage(error: any) {
  if (axios.isAxiosError(error)) {
    // Check if the error has a response with data and a message
    if (error.response && error.response.data && error.response.data.title) {
      return error.response.data.title;
    }
    if (error.response && error.response.data && error.response.data.message) {
      return error.response.data.message;
    }
    if (error.response && error.response.data && error.response.data.error) {
      return error.response.data.error;
    }

    // Check if the error has a message property
    if (error.message) {
      return error.message;
    }
  }

  // Default message for other types of errors
  return "An unexpected error occurred";
}
