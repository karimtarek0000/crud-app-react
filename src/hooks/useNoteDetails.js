import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNote } from "../store/notesSlice";

const useNoteDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { record } = useSelector((state) => state.notesSlice);

  useEffect(() => {
    dispatch(getNote(id));
  }, [dispatch, id]);

  return record;
};

export default useNoteDetails;
