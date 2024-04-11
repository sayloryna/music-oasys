import { Album } from "./types.js";

const albums: Album[] = [
  {
    id: 1,
    name: "Bridges to Babylon",
    artistName: "The Rolling Stones",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/6a95/58c5/4877b79adfc4d48b660744a2896a4687?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gBsKjttZBGIFeNOnCagF-BHUJkCejlyXRzdYgvdNvzAemlDLg7euhaHv5XI9YDzrQOsz7PT2OzzNwwdydLpfYqXmTSrAZwwvmwCYyQSC2-yOC0CXlbxvyLjCzfWUHIzcrEA5MjVdil7d7d09qMScaa9~Ov5BjOYK1p-tEq3NCIn2DQmZQSntnPH~v8ulVbAeWFFLqoCugaC9d81fQiaf4A4-LXlj5Gmjo0v9ASj-UKCik4cQR09ztEPBDLwWGUQgVifuzD61ncYuL7rrsvgekUe6L~BdXIPwPCD4TbazX6bCYDAAUqKamPHAz65rdCc4li3oXFSv1XVD8ExXxv30bg__",
    format: "vynil",
    price: 21.99,
    originalPrice: 21.99,
    isAlbumOfTheMonth: false,
  },
  {
    id: 2,
    name: "Sueño tu boca",
    artistName: "Raúl",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/22fb/7429/7de436e60c79a2c88ae33cd66f5f464c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K8WnTA8YuldO0WkkOJIAHEWhCECtDjj-zyn8k2Ft51dNvcKc9bJ2PaG1JR5KEqPK77yLG4usFYodDLN3t-4ly~aEmY-y7E9MNKmZmTkJ~C3E-TWC0Iifj~3S4kf4lc-ms5YtvhMsV8qw1aEKclxFcJVQcRXC0UW~bmORvoFQ6QWiFjA05skXpf7BiRR10Teqr0RseA5zw9rdz8J0suqiub50omMHXkRvUB~~~BD6S~bdvcSLIYijeZZq96N~E-s7ud-hdwRt6FTu~nULKU7auVtiCS7RzWBkcc-zxa2PNjGtEM57GoEHFJOen7GgP2KvnhO2rnyhMndGOIWgObz2KQ__",
    format: "vinyl",
    price: 99.99,
    originalPrice: 119.99,
    isAlbumOfTheMonth: false,
  },
  {
    id: 3,
    name: "Temple of the Dog",
    artistName: "Temple of the Dog",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/fe3e/24c2/c9bce1b87da30b56f6d48703ff9631df?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GhMHHfcPvuYIa9bOukLC0SbcWjtyu43vhH0Y~t~crrLWg8p9lvPqFkt9~IphagDTWynqX5RmytcB86Ea7bWdhrLdXX0ZzWvg0oFcderMNxTTnQYz9rQWPlQjAnMW8PwrR8kkrzPk9e-Pxih1tDWdkNtj~13aI0ZterZloa6DzfvDzAYHMtQYO6npOFsFPzBe4Un-Y1~45IDdmn3dCa55CpHjGDIsRXWspHXxGp1Q-U74qY0v9ogIICnqr7dPmF2QIpdsK3PrzXg-Pawzql7DkC2l0CA6OHsPlXbDhSW94jws7gvyfb6OBrEhN3kXWsh8eUIjkrH1lF2VuSqeEmmPrA__",
    format: "digital",
    price: 23.99,
    originalPrice: 23.99,
    isAlbumOfTheMonth: false,
  },
  {
    id: 4,
    name: "Whenever you need somebody",
    artistName: "Rick Astley",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/ae5b/02e5/14f9513a03e5065efc5358746f9c2b22?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hqVvixRyiZ3Qy21gYPRyr2XHm2aDoq~VCpzE3eHrC~b74xrcedJzUNtewEiUNTLjl1CfP4u~aVdB3GOAtlrj23Hsq6iLj5IpPlGJK5DXMWnXFNZ~YPupITaPAxmTtjUrKKLcerRAbmt7cOftR2L-U~xGAJsHs7fS20PEnfr4I6D4kOpZCY6qX9uXy4Jp~qit9qpYXggZMl7G4TMypWWyfvkCucT-ebAXW1WT~SlgYlTFFldmhcfPWqLNjl-DzB3g1tVcdt4RDfD-4vYOulRp~QMEJt2rA916tRpKBXGlKvnt2vh8TVt6TIWim0QhU69~Zy5WkagYe1z1sAzelt0Xug__",
    format: "digital",
    price: 269.99,
    originalPrice: 359.99,
    isAlbumOfTheMonth: false,
  },
  {
    id: 5,
    name: "Marifé de Triana",
    artistName: "Marifé de Triana",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/8531/031f/170df062227d590261a1377d2b9f8b13?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m1AiVDpJpewe6TVlZOaaEeSZ9BuGqGjwUia5TVAZEMLg0fU6BLcsZfVhAJuMv0BMSzAJqcR3XFseDuXs3f1Nv3O9bcCD4CYSSmzQDNYgZHV5U30I8ZPtkbTEfdMJ0DEA5hGxyc0LzncRNfUjEXSmKdCSGWxFObk37VuIhisN4gQjghpac0Y3pfeXRQDQQ68JQGzUFFbmnXAhrdI4wHvxWTpbW45uUtjuoFLsVozMwP0HHk1ZqADvh4QZEttJJ~Ia-~5wspt2S7XznL7c7Mipo07OF0vPxLnyOQQ~A0fwHc6at254u9IPIQmHnjEDrnuS3r~81~YOLwKHI3DQg60vtg__",
    format: "vinyl",
    price: 219.99,
    originalPrice: 219.99,
    isAlbumOfTheMonth: false,
  },
  {
    id: 6,
    name: "Show me love",
    artistName: "Robin S",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/8d32/f016/e03c2cffb41da50f1fd0ece24f5586ac?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wh4wmbx~B7mKdz5cDMSPV68QFnf3EbaaCJFwmCVCsUPwxQuDZBbuEG2T1k7SwAJMrQACwvhsO-bJ2TiuQJfRzBLtQ73OM1taDlJfBjaSPVWS7Aaw8RXEbrEtxpxEP9bi1PzR49nnHBMgCkptkTA8R6baS4sDKFXvwJdgliqdxYZzLFsusTbsTypwJBZHDi-bxqooTx46MIZ81ZbtF83OrlZpFkNNYk3h7QhxdZwORawWoyZqqOxWX5ItakA~rmqZ~1lsp52DG~ogMLWEMuK8uSa5n~isd-ti4XXxp2ytkL9elUyAE8SVUMlr85DxjlBqGaQjWt2AA~1FECWk30o3XA__",
    format: "digital",
    price: 19.99,
    originalPrice: 19.99,
    isAlbumOfTheMonth: false,
  },
  {
    id: 7,
    name: "Homework",
    artistName: "Daft Punk",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/db4b/164c/ab38881e00f826157481b855926379c4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUmPpcyy5ybQ6zsgK32WrL2e2WnfrZAv5IG-8RwY93BPxbZfWlEJaewj63J8KGjJhHHhIxIBZcMBmf9N2cXAOMC7kBWPrGFSmtV6ijoWlyZn-Ekgk8BdAMlnNpMoVS-1n1Ro~YOwZnxAnJjquklZ-0l3Bn4msrDT8Abz-0-ZVTdmjBXQGnn1urHWsuBO9IWaRN7BKxsWYnYJOgq6-eDE-q-qT3sUgVEhnYoVz06HLYlOcKvgso9GlgY16-3Zsaz36GtgY1LRWC-8H75SfIJ7Wv4FK6olyXHjU2T7O5pAoSZ2NMNhEdKD~nSwKwKsOzRQ6TR2pthGEjFE12NK5xFNzw__",
    format: "vinyl",
    price: 24.59,
    originalPrice: 24.99,
    isAlbumOfTheMonth: false,
  },
  {
    id: 8,
    name: "El Chiringuito",
    artistName: "Georgie Dann",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/2324/5fe8/c149c07dd55bb0810cc9d77af3df0e26?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLhFhc-w4E2r9Xspqe1zChgx15PIOIwHX8huFNrqFlPiOhNtkB4rEM8Z6BVh8F4cHiYiE7LZJGFhxynZqvD~ysOLAMKpOIgmGUY~Z32Omuo8UvBCEwkP6aGSpYQMjKsHKYA6ChcP9aUvByMQ5KzBuySVOdK95u-1pcRKqNT6bQeieS2qIvP3NB-uq9G9nRw9De5KDnaj8KDd~DnP9Yw0YtqxELx~DM8QkBgWtXw2o0jLpRfpuu8ch2fzFIauObOtrWoDGzeoqdAM2UP2vkrJ6IhEHGIo3MJX-hDm0DOkipHTfu5orDVaURKvvLTOHX4ZVaKegQt3ADCa1ZM68rJ6RA__",
    format: "vinyl",
    price: 1.99,
    originalPrice: 1.99,
    isAlbumOfTheMonth: true,
  },
];
