<?php

namespace App\Tenant\Http\Controllers;

class MailboxController
{
    public function __invoke()
    {
        return view('mailbox');
    }
}
