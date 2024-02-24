import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChannelsService } from '../../services/channels.service';
import { FormControl } from '@angular/forms';
import { ChannelsStoreService } from '../../services/channels-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrl: './add-channel.component.css',
})
export class AddChannelComponent {
  title = 'synergy';
  modalRef?: BsModalRef;
  channelName: FormControl = new FormControl('');

  constructor(
    private modalService: BsModalService,
    private channelsService: ChannelsService,
    private channelsStoreService: ChannelsStoreService,
    private router: Router
  ) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }
  addChannel() {
    const newChannel = {
      name: this.channelName.value,
    };
    this.channelsService.addChannel(newChannel).subscribe({
      next: () => {
        this.channelsStoreService.addChannel(newChannel);
        this.closeModal();
        this.router.navigate(['']);
      },
    });
  }
  addStyleHover(event: any) {
    event.target.classList.add('hover');
  }
  removeStyleHover(event: any) {
    event.target.classList.remove('hover');
  }
}
