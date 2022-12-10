export const lessonType = [
  {
    title: "Pilih Salah satu!",
    value: "",
  },
  {
    title: "Video",
    value: "video",
  },
  {
    title: "Onsite",
    value: "onsite",
  },
];

export const booleanRequirement = [
  {
    title: "Pilih Salah satu!",
    value: "",
  },
  {
    title: "Yes",
    value: true,
  },
  {
    title: "No",
    value: false,
  },
];

export const sessionDefault = {
  title: null,
  lessonMaterials: []
}

export const lessonDefault = {
  title: null,
  isRequired: null,
  isDownloadable: null,
  type: null,
  date: null,
  duration: {
    hour: null,
    minute: null,
    second: null,
  },
}
