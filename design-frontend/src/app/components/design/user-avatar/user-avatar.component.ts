import { Component, Input, OnInit } from '@angular/core';
import { UserStatus } from 'src/app/models/user-statuses';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  @Input() imageURL!: string;
  @Input() avatarSize!: string;
  @Input() isUserStatusEnabled: boolean = false;
  @Input() userStatus!: UserStatus;
  @Input() statusSize!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(): string {
    return this.imageURL ?? 'assets/images/user.png';
  }

  getAvatarSize(): string {
    return this.avatarSize ?? '20px';
  }

  getStatusColor(): string {
    switch (this.userStatus) {
      case UserStatus.Online: return 'yellowgreen';
      case UserStatus.Busy: return 'red';
      default: return 'yellowgreen'
    }
  }

  getStatusHolderSize(): string {
    return this.statusSize ? this.statusSize + 'px' : '12px';
  }

  getStatusSize(): string {
    return this.statusSize ? this.statusSize - 2 + 'px' : '8px';
  }
}
