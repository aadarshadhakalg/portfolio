import 'dart:html';
import 'package:zap/internal/dsl.dart';
import 'package:riverpod/riverpod.dart';import 'context.dart';
void __zap___component(ComponentOrPending self) {


  @prop
  List<Override> overrides = const [];

  void Function()? task;

  final container = ProviderContainer(parent: self.container, overrides: overrides);
  container.vsyncOverride = (newTask) {
    assert(task == null, 'Two tasks scheduled at the same time, illegal state.');
    task = newTask;
  };
  self.container = container;

  // Propagate changes of the overrides attribute to the container.
  $: container.updateOverrides(overrides);

  // Execute the task after an update delay set by the component.
  $: if (task != null) {
    task!.call();
    task = null;
  }

  self.onDestroy(container.dispose);

@Slot(null)
dynamic __zap____slots;
}
