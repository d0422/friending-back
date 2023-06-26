import { Request, Response } from 'express';
import { FriendService } from '../services/FriendService';
import {
  friendGetAllValidation,
  friendAddValidation,
  friendGetValidation,
  firendDeleteValidation,
} from '../DTO/validations/friend';

export class FriendController {
  static async post(req: Request, res: Response) {
    const { userProfileId, subProfileId } = await friendAddValidation(req);
    await FriendService.add(userProfileId, subProfileId);
    res.json('등록 완료!');
  }

  static async getAll(req: Request, res: Response) {
    const userProfileId = await friendGetAllValidation(req);
    const result = await FriendService.getFriendProfiles(userProfileId);
    res.json(result);
  } //user의 모든 프로필에 대한 모든 친구를 가져옴
  static async get(req: Request, res: Response) {
    const profileId = await friendGetValidation(req);
    const result = await FriendService.show(profileId);
    res.json(result);
  } //한가지 프로필에 대한 친구목록을 가져옴

  static async delete(req: Request, res: Response) {
    const { userProfileId, subProfileId } = await firendDeleteValidation(req);
    await FriendService.delete(userProfileId, subProfileId);
    res.json('친구 삭제를 완료하였습니다');
  }
}
