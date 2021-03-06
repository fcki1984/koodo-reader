import BookModel from "../../model/Book";
import NoteModel from "../../model/Note";
import DigestModel from "../../model/Digest";
import HighligherModel from "../../model/Highlighter";
import BookmarkModel from "../../model/Bookmark";
export interface EditDialogProps {
  handleMessage: (message: string) => void;
  handleMessageBox: (isShow: boolean) => void;
  handleFetchBooks: () => void;
  handleEditDialog: (isShow: boolean) => void;
  books: BookModel[];
  notes: NoteModel[];
  digests: DigestModel[];
  highlighters: HighligherModel[];
  bookmarks: BookmarkModel[];
  isOpenDeleteDialog: boolean;
  currentBook: BookModel;
}

export interface EditDialogState {
  isCheck: boolean;
}
