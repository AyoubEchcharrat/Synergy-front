import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Channel} from "../../../core/models/channels";
import {FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ChannelsStoreService} from "../../services/channels-store.service";
import {ChannelsService} from "../../services/channels.service";

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrl: './edit-channel.component.css'
})
export class EditChannelComponent implements OnInit{
  currentChannel!: Channel | undefined;
  channelNameForm: FormControl = new FormControl();
  @Output() closeEditChannelFormEmmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private activatedRoute: ActivatedRoute,
              private channelStore: ChannelsStoreService,
              private channelService: ChannelsService) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idChannel = Number(params.get('id'));
      this.currentChannel = this.channelStore.findById(idChannel);
      this.channelNameForm.setValue(this.currentChannel?.name);
    })
  }

  editChannelName() {
    if(this.currentChannel) {
      this.currentChannel.name = this.channelNameForm.value;
      this.channelService.updateChannelName(this.currentChannel).subscribe({
          next: value => this.closeEditChannelNameForm(),
          error: err => console.log(err)
        })
    }
  }

  closeEditChannelNameForm() {
    this.closeEditChannelFormEmmitter.emit();
  }
}
