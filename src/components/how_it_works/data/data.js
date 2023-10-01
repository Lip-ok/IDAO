import forecasts_icon1 from "../assets/forecasts_icon1.svg";
import forecasts_icon2 from "../assets/forecasts_icon2.svg";
import forecasts_icon3 from "../assets/forecasts_icon3.svg";
import forecasts_video from "../assets/forecasts.mp4";
//
import stacking_icon1 from "../assets/stacking_icon1.svg";
import stacking_icon2 from "../assets/stacking_icon2.svg";
import stacking_icon3 from "../assets/stacking_icon3.svg";
import stacking_video from "../assets/stacking.mp4";
//
import monetizationSkills_icon1 from "../assets/monetizationSkills_icon1.svg";
import monetizationSkills_icon2 from "../assets/monetizationSkills_icon2.svg";
import monetizationSkills_icon3 from "../assets/monetizationSkills_icon3.svg";
import monetizationSkills_video from "../assets/monetizationSkills.mp4";
//
import voting_icon1 from "../assets/voting_icon1.svg";
import voting_icon2 from "../assets/voting_icon2.svg";
import voting_icon3 from "../assets/voting_icon3.svg";
import voting_video from "../assets/voting.mp4";

export const dataHowItWorks = [
  {
    label: "Доказательство успеха",
    title: "Прогнозы",
    description:
      "Осуществляйте прогнозы на крипто-активы, получайте вознаграждение, формируйте рейтинг и участвуйте в соревнованиях на IDAO forecast.",
    list: [
      { icon: forecasts_icon1, text: "Актуальная аналитика" },
      { icon: forecasts_icon2, text: "Формирование рейтинга" },
      { icon: forecasts_icon3, text: "Поощрение участия" },
    ],
    video: forecasts_video,
  },
  {
    label: "Инвестиции в рост",
    title: "Стейкинг",
    description:
      "Получайте вознаграждение за удержание токенов, доступ к расширенному функционалу IDAO forecast и участию в голосованиях на IDAO Vote.",
    list: [
      { icon: stacking_icon1, text: "Участие в развитии" },
      { icon: stacking_icon2, text: "Расширенные возможности" },
      { icon: stacking_icon3, text: "Процентный доход" },
    ],
    video: stacking_video,
  },
  {
    label: "Инвестиции в рост",
    title: "Монетизация навыков",
    description:
      "Заявите о своих навыках всему миру, войдите в число лучших аналитиков IDAO forecast и получите возможность стать доверительным управляющим на IDAO trust.",
    list: [
      { icon: monetizationSkills_icon1, text: "Личный рейтинг" },
      {
        icon: monetizationSkills_icon2,
        text: "Статус доверительного управляющего",
      },
      { icon: monetizationSkills_icon3, text: "Комиссионный доход" },
    ],
    video: monetizationSkills_video,
  },
  {
    label: "Доверительное управление",
    title: "Голосования",
    description:
      "IDAO Vote необходимый механизм децентрализованной организации, позволяющий владельцам токенов участвовать в принятии решений.",
    list: [
      { icon: voting_icon1, text: "Децентрализация решений" },
      { icon: voting_icon2, text: "Личное участие" },
      { icon: voting_icon3, text: "Защита интересов" },
    ],
    video: voting_video,
  },
];
