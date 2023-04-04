import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import NotesList from "../../components/notes/NotesList";
import { deleteNote, fetchNotes } from "../../states/notesSlice";

function Index() {
  const { records, loading, error } = useSelector((state) => state.notesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const deleteHandler = useCallback(
    (id) => dispatch(deleteNote(id)),
    [dispatch]
  );

  return (
    <>
      <Loading loading={loading} error={error}>
        <NotesList notes={records} deleteHandler={deleteHandler} />
      </Loading>
    </>
  );
}

export default Index;
