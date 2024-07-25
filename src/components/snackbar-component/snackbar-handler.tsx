import React, { useState } from "react";
import Snackbar from "./snackbar/snackbar";
import Button from "../button-component/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { SnackbarType } from "./snackbar/snackbar-property";

const SnackbarHandler: React.FC = () => {
  const [isSnackbarInfoOpen, setSnackbarInfoOpen] = useState(false);
  const [isSnackbarSuccessOpen, setSnackbarSuccessOpen] = useState(false);
  const [isSnackbarWarningOpen, setSnackbarWarningOpen] = useState(false);
  const [isSnackbarErrorOpen, setSnackbarErrorOpen] = useState(false);

  const showSnackbarInfo = () => {
    setSnackbarInfoOpen(true);
  };
  const showSnackbarSuccess = () => {
    setSnackbarSuccessOpen(true);
  };
  const showSnackbarWarning = () => {
    setSnackbarWarningOpen(true);
  };
  const showSnackbarError = () => {
    setSnackbarErrorOpen(true);
  };

  const closeSnackbarInfo = () => {
    setSnackbarInfoOpen(false);
  };
  const closeSnackbarSuccess = () => {
    setSnackbarSuccessOpen(false);
  };
  const closeSnackbarWarning = () => {
    setSnackbarWarningOpen(false);
  };
  const closeSnackbarError = () => {
    setSnackbarErrorOpen(false);
  };

  const handleActionInfoClick = () => {
    // alert("Info Action button clicked..!");
    closeSnackbarInfo();
  };
  const handleActionSuccessClick = () => {
    // alert("Success Action button clicked..!");
    closeSnackbarSuccess();
  };
  const handleActionWarningClick = () => {
    // alert("Warning Action button clicked..!");
    closeSnackbarWarning();
  };
  const handleActionErrorClick = () => {
    // alert("Error Action button clicked..!");
    closeSnackbarError();
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button onClick={showSnackbarInfo}>Info Snackbar</Button>
        <Snackbar
          type={SnackbarType.Info}
          title="Info"
          message="This is a Information snackbar demo"
          isOpen={isSnackbarInfoOpen}
          onClose={closeSnackbarInfo}
          //   actionText="Info"
          actionIcon={<FontAwesomeIcon icon={faX} />}
          onActionClick={handleActionInfoClick}
          // image={"https://picsum.photos/200/300"}
        />
      </div>
      <div>
        <Button onClick={showSnackbarSuccess}>Success Snackbar</Button>
        <Snackbar
          type={SnackbarType.Success}
          title="Success"
          message="This is a Success snackbar demo"
          isOpen={isSnackbarSuccessOpen}
          onClose={closeSnackbarSuccess}
          //   actionText="success"
          actionIcon={<FontAwesomeIcon icon={faX} />}
          onActionClick={handleActionSuccessClick}
          // image={"https://picsum.photos/200/300"}
        />
      </div>
      <div>
        <Button onClick={showSnackbarWarning}>Warning Snackbar</Button>
        <Snackbar
          type={SnackbarType.Warning}
          title="Warning"
          message="This is a Warning snackbar demo"
          isOpen={isSnackbarWarningOpen}
          onClose={closeSnackbarWarning}
          // actionText="Undo"
          actionIcon={<FontAwesomeIcon icon={faX} />}
          onActionClick={handleActionWarningClick}
          // image={"https://picsum.photos/200/300"}
        />
      </div>
      <div>
        <Button onClick={showSnackbarError}>Error Snackbar</Button>
        <Snackbar
          type={SnackbarType.Error}
          title="Error"
          message="This is a Error snackbar demo"
          isOpen={isSnackbarErrorOpen}
          onClose={closeSnackbarError}
          // actionText="Undo"
          actionIcon={<FontAwesomeIcon icon={faX} />}
          onActionClick={handleActionErrorClick}
          // image={"https://picsum.photos/200/300"}
        />
      </div>
    </div>
  );
};

export default SnackbarHandler;
