"use client";

import { ReplyProps } from "@/libs/types";

export default function Reply({ ImagePath, username, replyTitle, likes }: ReplyProps) {
  return (
    <div className="border-bottom">
      <div className="d-flex align-items-center p-3">
        <img src={ImagePath} width="90px" className="rounded-circle me-4"></img>
        <span className="text-center display-6 me-auto">{username}</span>
        <span> {replyTitle}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likes}</span>
            </div>
        </div>
    </div>
  );
}
