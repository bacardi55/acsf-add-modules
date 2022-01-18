<?php

namespace Drupal\simple_global_filter;

/**
 * Cache
 * Stores the cache in the user's session.
 */
class Cache {

  /**
   * Write the supplied data to the user session.
   *
   * @param string $bin,
   *   unique id, eg a string prefixed by the module name.
   * @param $data,
   *   use NULL to delete the bin; it may be refilled at any time
   */
  public function set($data = NULL, $bin = 'default') {
    if (!isset($bin)) {
      return;
    }

    $_SESSION['simple_global_filter.cache'][$bin] = $data;
  }

  /**
   * Read data from the user session, given its bin id.
   *
   * @param string $bin,
   *   unique id eg a string prefixed by the module name.
   */
  public function get($bin = 'default') {
    if (!isset($bin)) {
      return NULL;
    }

    $data = !empty($_SESSION['simple_global_filter.cache'][$bin]) ?
      $_SESSION['simple_global_filter.cache'][$bin] : NULL;

    return $data;
  }

}
