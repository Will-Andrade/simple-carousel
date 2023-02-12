export type ResponseObj = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export type CarouselItemType = Omit<ResponseObj, 'url'>;
