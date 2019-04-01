<?php

namespace Tenant\Http\Controllers;

class MailboxController
{
    public function __invoke()
    {
        return view('mailbox');
    }
}