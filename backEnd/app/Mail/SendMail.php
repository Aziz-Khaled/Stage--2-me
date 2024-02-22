<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    public $to;
    public $subject;
    public $message;

    /**
     * Create a new message instance.
     *
     * @param string $to
     * @param string $subject
     * @param string $message
     */
    public function __construct($to, $subject, $message)
    {
        $this->to = $to;
        $this->subject = $subject;
        $this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('mouhamedazizkhaled@gmail.com')
                    ->subject($this->subject)
                    ->html("<p>{$this->message}</p>");
    }
}
