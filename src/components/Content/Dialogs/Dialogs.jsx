import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Preloader from "../../common/Preloader/Preloader";
import { useFormik } from "formik";

const Dialogs = ({ dialogsPage, sendMessage }) => {
  // debugger;

  if (!dialogsPage) {
    return <Preloader />;
  }

  const dialogs = dialogsPage.dialogsItemsData.map((dialog) => (
    <DialogItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name}
      src={dialog.src}
    />
  ));

  const messeges = dialogsPage.messagesData.map((mess) => (
    <Message key={mess.id} id={mess.id} message={mess.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog_items}>
        <ul>{dialogs}</ul>
      </div>
      <div className={classes.messages}>
        <div className={classes.messages_block}>{messeges}</div>
        <MessageForm sendMessage={sendMessage} />
      </div>
    </div>
  );
};

const MessageForm = ({ sendMessage }) => {
  const formik = useFormik({
    initialValues: {
      messageText: "",
    },
    onSubmit: (values, {resetForm} ) => {
      console.log(values);
      if (values.messageText) sendMessage(values.messageText);
      resetForm({values: ''})
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.send_messages_form}>
      <div className={classes.send_input_block}>
        <input
          type="text"
          name="messageText"
          placeholder="Write a message..."
          onChange={formik.handleChange}
          value={formik.values.messageText}
        />
      </div>
      <div className={classes.send_input_button}>
        <button type="onsubmit" disabled={!formik.values.messageText}>
          Send
        </button>
      </div>
    </form>
  );
};

export default Dialogs;
