import React from "react";

import { Dialog, DialogContent, ImageList, ImageListItem } from "@mui/material";

const DialogImages = ({ restaurant, open, handleClose }) => {
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
          <ImageListItem key={restaurant.thumb} cols={2} rows={2}>
            <img
              src={`${restaurant.thumb}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${restaurant.thumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={restaurant.id}
              loading="lazy"
            />
          </ImageListItem>
          {restaurant.photos.map((item) => (
            <ImageListItem key={item.photo.url}>
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
