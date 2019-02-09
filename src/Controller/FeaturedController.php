<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/browse")
 */
class FeaturedController extends AbstractController
{
    /**
     * @Route("/featured", name="featured")
     */
    public function index()
    {
        return $this->render('featured/index.html.twig', [
            'controller_name' => 'FeaturedController',
        ]);
    }
}
