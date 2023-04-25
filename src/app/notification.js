export function SuccessNotification(Message){
    $(document).Toasts('create', {
        autohide: true,
        // position: 'bottomRight',
         delay: 1000,
        class: 'bg-success',
        title: 'Success',
        // subtitle: Subtitle,
        body: Message,
      })
}
export function FailedNotification(Message){
    $(document).Toasts('create', {
        autohide: true,
        delay: 1000,
        class: 'bg-danger',
        title: 'Failed',
        // subtitle: Subtitle,
        body: Message,
      })
}
export function HideModel(){
    $('#modal-lg').modal('toggle');
}