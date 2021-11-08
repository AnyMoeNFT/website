import mitt, { Emitter } from 'mitt';

type ImageEvents = {
  load: {
    imageId: string;
  };
  loaded: {
    imageId: string;
  };
  error: {
    imageId: string;
  };
};

const emitter: Emitter<ImageEvents> = mitt();

export default emitter;
