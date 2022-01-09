import React from "react";

import { Dialog, DialogContent, ImageList, ImageListItem } from "@mui/material";

const DialogImages = ({ images, open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}>
      <DialogContent>
        <ImageList
          sx={{ minWidth: 300, maxHeight: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {images.map((item, index) => (
            <ImageListItem key={item.photo.url} cols={index % 3 == 0 || index % 5 ? 2 : 1} rows={index % 5 == 0 ? 2 : 1}>
              <img
                src={`${item.photo.url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.photo.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.id}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </DialogContent>
    </Dialog>
  );
};

export default DialogImages;
