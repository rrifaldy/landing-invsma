import image2 from "@/images/project/project1.webp";
import image3 from "@/images/project/project1.webp";
import image from "@/images/project/project1.webp";

const text1 =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
const text2 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const summaryText =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.";

const causesDetails = {
    category: "Sukuk",
    title: "PT DHUHA",
    pt: "INVSMA",
    description:
        "Proyek ini bertujuan untuk memenuhi kebutuhan klien kami dalam bidang property untuk tujuan pemecahan SHM (Surat Hak Milik) di pro",
    raised: "25,270",
    lokasi: "Citayam, Jakarta",
    raised: "1250900000",
    goal: "3999100000",
    day: 45,

    images: [image, image2, image3],
    texts: [text1, text2],
    summaryText,
    summaryList: [
        "Making this first true generator",
        "Many desktop publish packages",
        "Lorem Ipsum is not simply",
        "If you are going to passage",
        "It has roots in a piece",
    ],
    comments: [
        {
            id: 1,
            image: "comment-1-1.jpg",
            message:
                "Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.",
            sender: "David Marks",
            time: "3 hours ago",
        },
        {
            id: 2,
            image: "comment-1-2.jpg",
            message:
                "Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.",
            sender: "Christine Eve",
            time: "3 hours ago",
        },
    ],
};

export default causesDetails;