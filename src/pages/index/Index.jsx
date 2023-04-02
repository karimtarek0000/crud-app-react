import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesList from "../../components/notes/NotesList";
import { fetchNotes } from "../../states/notesSlice";

function Index() {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.notesSlice);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <>
      <NotesList notes={records} />
    </>
  );
}

export default Index;
