import {
  BK,
  BLOCK_1,
  BLOCK_2,
  BLOCK_3,
  BLOCK_4,
  CH,
  D,
  EN_GK,
  EN_LK,
  ETH,
  FRZ,
  GE,
  LF_10,
  LF_11,
  LF_13,
  LF_9_12,
  LIT,
  MA_GK,
  MA_LK,
  PH,
  RU,
  SP,
  Timetable,
} from "../domain";

export const IGD20: Timetable = {
  mon: [
    { time: BLOCK_1, subject: EN_LK, place: "B 03" },
    { time: BLOCK_1, subject: MA_LK, place: "B 11" },
    { time: BLOCK_2, subject: FRZ, place: "B 10" },
    { time: BLOCK_2, subject: RU, place: "B 304" },
    { time: BLOCK_3, subject: LF_13, group: 1, place: "B 405" },
    { time: BLOCK_3, subject: LF_11, group: 2, place: "B 5" },
    { time: BLOCK_4, subject: EN_GK, place: "B 03" },
    { time: BLOCK_4, subject: MA_GK, place: "B 11" },
  ],
  tue: [
    { time: BLOCK_1, subject: EN_GK, iteration: 2, place: "B 03" },
    { time: BLOCK_1, subject: MA_GK, place: "B 11" },
    { time: BLOCK_2, subject: D, place: "B 4" },
    { time: BLOCK_3, subject: LF_11, iteration: 1, place: "B 5" },
    { time: BLOCK_3, subject: BK, iteration: 2, place: "A 06" },
    { time: BLOCK_3, subject: LIT, iteration: 2, place: "A 102" },
    { time: BLOCK_4, subject: LF_9_12, place: "B 8" },
  ],
  wed: [
    { time: BLOCK_1, subject: D, place: "B 6" },
    { time: BLOCK_2, subject: ETH, place: "B 03" },
    { time: BLOCK_3, subject: LF_13, group: 1, place: "A 103" },
    { time: BLOCK_3, subject: LF_10, group: 2, place: "B 405" },
    { time: BLOCK_4, subject: LF_11, group: 1, place: "B 5" },
    { time: BLOCK_4, subject: LF_13, group: 2, place: "B 3" },
  ],
  thu: [
    { time: BLOCK_1, subject: EN_LK, place: "B 03" },
    { time: BLOCK_1, subject: MA_LK, place: "D 017" },
    { time: BLOCK_2, subject: FRZ, place: "A 102" },
    { time: BLOCK_2, subject: RU, place: "B 304" },
    { time: BLOCK_3, subject: SP, place: "117. GS" },
    { time: BLOCK_4, subject: GE, place: "B 414" },
  ],
  fri: [
    { time: BLOCK_1, subject: GE, iteration: 1, place: "B 414" },
    { time: BLOCK_1, subject: EN_LK, iteration: 2, place: "B 03" },
    { time: BLOCK_1, subject: MA_LK, iteration: 2, place: "B 112" },
    { time: BLOCK_2, subject: CH, place: "B 9" },
    { time: BLOCK_3, subject: LF_10, group: 1, place: "B 405" },
    { time: BLOCK_3, subject: LF_13, group: 2, place: "A 103" },
    { time: BLOCK_4, subject: PH, place: "B 104" },
  ],
};
